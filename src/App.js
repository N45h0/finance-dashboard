import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Tabs, Tab, Alert, LinearProgress, Grid, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
import { CreditCard, Calendar, AlertTriangle } from 'lucide-react';

const USD_TO_UYU = 46.65;

const loans = [
  {
    id: 1,
    name: "Refinanciamiento Antel",
    owner: "LAFIO",
    capital: 4941.19,
    installments: 9,
    amount: 549.02,
    paidInstallments: 1,
    interestRate: 0,
  },
  {
    id: 2,
    name: "BROU Viaje Argentina",
    owner: "LAFIO",
    capital: 12000.00,
    installments: 10,
    amount: 1411.58,
    paidInstallments: 0,
    interestRate: 29.00,
    moratory: 43.74,
    cancellationFee: 732.00,
    account: "2477"
  },
  {
    id: 3,
    name: "BROU Dentista",
    owner: "Lovia",
    capital: 20000.00,
    installments: 12,
    amount: 1916.39,
    paidInstallments: 2,
    interestRate: 23.00,
    moratory: 51.35,
    ceipRetention: true
  },
  {
    id: 4,
    name: "BROU Buenos Aires",
    owner: "Lovia",
    capital: 10000.00,
    installments: 6,
    amount: 1801.64,
    paidInstallments: 0,
    interestRate: 19.00,
    moratory: 43.74,
    ceipRetention: true
  },
  {
    id: 5,
    name: "Adelanto Sueldo BROU",
    owner: "Lovia",
    capital: 4800.00,
    installments: 1,
    amount: 4831.57,
    paidInstallments: 0,
    interestRate: 0,
    moratory: 43.74,
    isOverdue: true
  }
];

const services = [
  {
    category: "Digitales",
    account: "6039",
    items: [
      {
        name: "Spotify Premium Familiar",
        amount: 11.99,
        currency: "USD",
        billingDay: 3,
        uyu: 577
      },
      {
        name: "ChatGPT",
        amount: 20,
        currency: "USD",
        uyu: 933
      },
      {
        name: "Claude",
        amount: 20,
        currency: "USD",
        uyu: 933
      },
      {
        name: "Google One",
        amount: 20,
        currency: "USD",
        period: "Anual",
        uyu: 933
      },
      {
        name: "Plan Antel",
        amount: 520,
        currency: "UYU",
        period: "Mensual"
      }
    ]
  },
  {
    category: "Otros",
    items: [
      {
        name: "Peluquería",
        amount: 820,
        currency: "UYU",
        period: "Mensual"
      }
    ]
  }
];

const accounts = [
  {
    id: "6039",
    name: "Cuenta Principal",
    type: "Visa débito",
    expiry: "03/2029",
    income: ["Pagos Expande Digital", "Ex sueldo Elared"],
    services: ["Servicios digitales", "Refinanciamiento Antel"]
  },
  {
    id: "2477",
    name: "Cuenta BPS",
    type: "Visa débito",
    income: ["Pasividades BPS"],
    linkedLoans: ["BROU Viaje Argentina", "BROU Dentista", "BROU Buenos Aires"]
  },
  {
    id: "3879",
    name: "MasterCard Prepago",
    type: "Prepago",
    backup: true
  }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function formatCurrency(amount, currency = "UYU") {
  return new Intl.NumberFormat('es-UY', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export default function Dashboard() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Financiero Personal
      </Typography>

      <Alert severity="error" sx={{ mb: 3 }}>
        Adelanto de sueldo vencido: {formatCurrency(4831.57)}
      </Alert>

      <Tabs value={value} onChange={handleChange}>
        <Tab label="Resumen" />
        <Tab label="Préstamos" />
        <Tab label="Servicios" />
        <Tab label="Cuentas" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Resumen Mensual Total</Typography>
                <Typography variant="h4">{formatCurrency(38196.20)}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography>LAFIO: {formatCurrency(14676.60)}</Typography>
                  <Typography>Lovia: {formatCurrency(23519.60)}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Progreso de Préstamos</Typography>
                {loans.map(loan => (
                  <Box key={loan.id} sx={{ mt: 2 }}>
                    <Typography variant="body2">
                      {loan.name} ({loan.paidInstallments}/{loan.installments})
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={(loan.paidInstallments/loan.installments) * 100} 
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Distribución por Titular</Typography>
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'LAFIO', value: 14676.60, fill: "#1a1757" },
                          { name: 'Lovia', value: 23519.60, fill: "#8884d8" }
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          dataKey="value"
                      />
                      <Tooltip formatter={(value) => formatCurrency(value)} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Capital Total: {formatCurrency(51741.19)}</Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {loans.map(loan => (
                    <Grid item xs={12} md={6} key={loan.id}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="h6">{loan.name}</Typography>
                          <Typography color="textSecondary">Titular: {loan.owner}</Typography>
                          <Box sx={{ mt: 2 }}>
                            <Typography>Capital: {formatCurrency(loan.capital)}</Typography>
                            <Typography>Cuota: {formatCurrency(loan.amount)}</Typography>
                            <Typography>Progreso: {loan.paidInstallments}/{loan.installments}</Typography>
                            {loan.interestRate > 0 && (
                              <Typography>TEA: {loan.interestRate}%</Typography>
                            )}
                            {loan.moratory > 0 && (
                              <Typography>TEA Mora: {loan.moratory}%</Typography>
                            )}
                            {loan.ceipRetention && (
                              <Typography color="error">Retención CEIP</Typography>
                            )}
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Servicios Digitales (Cuenta 6039)</Typography>
                <List>
                  {services[0].items.map((service, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={service.name}
                        secondary={`${formatCurrency(service.amount, service.currency)} ${
                          service.currency === "USD" ? `(${formatCurrency(service.uyu)})` : ''
                        }`}
                      />
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6">
                    Total Servicios Mensuales: {formatCurrency(4716)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Fechas de Facturación</Typography>
                <List>
                  {[
                    { day: 1, desc: `Préstamo Argentina (${formatCurrency(1411.58)})` },
                    { day: 3, desc: `Spotify (${formatCurrency(11.99, "USD")})` },
                    { day: 3, desc: `Préstamo Dentista (${formatCurrency(1916.39)})` },
                    { day: 3, desc: `Préstamo Buenos Aires (${formatCurrency(1801.64)})` }
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Calendar />
                      </ListItemIcon>
                      <ListItemText primary={`Día ${item.day}: ${item.desc}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Grid container spacing={3}>
          {accounts.map((account) => (
            <Grid item xs={12} md={4} key={account.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{account.name} ({account.id})</Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography display="flex" alignItems="center" gap={1}>
                      <CreditCard size={20} />
                      {account.type}
                      {account.expiry && ` (vence ${account.expiry})`}
                    </Typography>
                    
                    {account.income && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2">Ingresos:</Typography>
                        <List dense>
                          {account.income.map((income, idx) => (
                            <ListItem key={idx}>
                              <ListItemText primary={income} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}

                    {account.linkedLoans && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2">Préstamos vinculados:</Typography>
                        <List dense>
                          {account.linkedLoans.map((loan, idx) => (
                            <ListItem key={idx}>
                              <ListItemText primary={loan} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}

                    {account.backup && (
                      <Typography color="textSecondary" sx={{ mt: 2 }}>
                        Tarjeta de respaldo
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}
