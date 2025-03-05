import { useEffect, useState } from "react";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Paper,
  CircularProgress,
  SelectChangeEvent,
} from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Integration = {
  name: string;
  logo: string;
  id: string;
};

export default function Home() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [selectedIntegration, setSelectedIntegration] = useState<string>("");
  const [actions, setActions] = useState<string[]>([]);
  const [selectedAction, setSelectedAction] = useState<string>("");
  const [actionProps, setActionProps] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch integrations on component mount
  useEffect(() => {
    const fetchIntegrations = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/integrations");
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Integrations data:", data);
        setIntegrations(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching integrations:", error);
        setError("Failed to load integrations");
      } finally {
        setLoading(false);
      }
    };

    fetchIntegrations();
  }, []);

  // Fetch actions when an integration is selected
  useEffect(() => {
    if (!selectedIntegration) {
      setActions([]);
      setSelectedAction("");
      setActionProps(null);
      return;
    }

    const fetchActions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/integration/actions/${selectedIntegration}`);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Actions data:", data);
        setActions(data);
        setSelectedAction("");
        setActionProps(null);
        setError(null);
      } catch (error) {
        console.error("Error fetching actions:", error);
        setError("Failed to load actions");
      } finally {
        setLoading(false);
      }
    };

    fetchActions();
  }, [selectedIntegration]);

  // Fetch action props when an action is selected
  useEffect(() => {
    if (!selectedIntegration || !selectedAction) {
      setActionProps(null);
      return;
    }

    const fetchActionProps = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/integration/action/${selectedIntegration}/${selectedAction}`
        );
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Action props data:", data);
        setActionProps(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching action props:", error);
        setError("Failed to load action properties");
      } finally {
        setLoading(false);
      }
    };

    fetchActionProps();
  }, [selectedIntegration, selectedAction]);

  const handleIntegrationChange = (event: SelectChangeEvent) => {
    setSelectedIntegration(event.target.value);
  };

  const handleActionChange = (event: SelectChangeEvent) => {
    setSelectedAction(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Dynamic Pieces Explorer</title>
        <meta name="description" content="Explore ActivePieces integrations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dynamic Pieces Explorer
        </Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        {loading && integrations.length === 0 ? (
          <CircularProgress />
        ) : (
          <>
            <Box sx={{ mb: 4 }}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="integration-select-label">Integration</InputLabel>
                <Select
                  labelId="integration-select-label"
                  id="integration-select"
                  value={selectedIntegration}
                  label="Integration"
                  onChange={handleIntegrationChange}
                >
                  {integrations.map((integration) => (
                    <MenuItem key={integration.id} value={integration.id}>
                      {integration.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {selectedIntegration && (
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="action-select-label">Action</InputLabel>
                  <Select
                    labelId="action-select-label"
                    id="action-select"
                    value={selectedAction}
                    label="Action"
                    onChange={handleActionChange}
                    disabled={loading || actions.length === 0}
                  >
                    {actions.map((action) => (
                      <MenuItem key={action} value={action}>
                        {action}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Box>

            <Paper
              elevation={2}
              sx={{
                p: 3,
                backgroundColor: "#f5f5f5",
                minHeight: 200,
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {loading && selectedAction ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    minHeight: 200,
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : selectedAction && actionProps ? (
                <pre
                  style={{
                    margin: 0,
                    overflow: "auto",
                    maxHeight: "500px",
                  }}
                >
                  {JSON.stringify(actionProps, null, 2)}
                </pre>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    minHeight: 200,
                    color: "text.secondary",
                  }}
                >
                  {selectedIntegration
                    ? selectedAction
                      ? "No props available"
                      : "Select an action"
                    : "Select an integration"}
                </Box>
              )}
            </Paper>
          </>
        )}

        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Debug Info: {integrations.length} integrations loaded
            {selectedIntegration && `, ${actions.length} actions for ${selectedIntegration}`}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
