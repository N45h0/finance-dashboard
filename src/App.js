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
        id: "SPT-2024",
        name: "Spotify Premium Familiar",
        price: {
          amount: 11.99,
          currency: "USD",
          uyuEquivalent: 577
        },
        billingCycle: "monthly",
        paymentMethod: "debit_6039",
        billingDay: 3,
        contract: {
          startDate: "2024-01-15",
          renewalDate: "2025-01-15",
          cancellationDate: null,
          duration: "12 months",
          progress: 8 // porcentaje de avance
        },
        paymentHistory: [
          {
            date: "2024-02-03",
            amount: 11.99,
            currency: "USD",
            status: "paid",
            method: "debit_6039"
          },
          {
            date: "2024-01-03",
            amount: 11.99,
            currency: "USD",
            status: "paid",
            method: "debit_6039"
          }
        ]
      },
      {
        id: "CHATGPT-2024",
        name: "ChatGPT",
        price: {
          amount: 20.00,
          currency: "USD",
          uyuEquivalent: 933
        },
        billingCycle: "monthly",
        paymentMethod: "debit_6039",
        billingDay: 15,
        contract: {
          startDate: "2024-01-15",
          renewalDate: "2025-01-15",
          cancellationDate: null,
          duration: "12 months",
          progress: 8
        },
        paymentHistory: [
          {
            date: "2024-02-15",
            amount: 20.00,
            currency: "USD",
            status: "paid",
            method: "debit_6039"
          },
          {
            date: "2024-01-15",
            amount: 20.00,
            currency: "USD",
            status: "paid",
            method: "debit_6039"
          }
        ]
      },
      {
        id: "CLDE-2024",
        name: "Claude",
        price: {
          amount: 20.00,
          currency: "USD",
          uyuEquivalent: 933
        },
        billingCycle: "monthly",
        paymentMethod: "debit_6039",
        billingDay: 20,
        contract: {
          startDate: "2024-01-20",
          renewalDate: "2025-01-20",
          cancellationDate: null,
          duration: "12 months",
          progress: 8
        },
        paymentHistory: [
          {
            date: "2024-02-20",
            amount: 20.00,
            currency: "USD",
            status: "pending",
            method: "debit_6039"
          },
          {
            date: "2024-01-20",
            amount: 20.00,
            currency: "USD",
            status: "paid",
            method: "debit_6039"
          }
        ]
      },
      {
        id: "GONE-2024",
        name: "Google One",
        price: {
          amount: 1.6,
          currency: "USD",
          uyuEquivalent: 69
        },
        billingCycle: "annual",
        paymentMethod: "debit_6039",
        billingDay: 1,
        contract: {
          startDate: "2024-12-01",
          renewalDate: "2025-12-01",
          cancellationDate: null,
          duration: "12 months",
          progress: 8
        },
        paymentHistory: [
          {
            date: "2024-12-01",
            amount: 19.99, // pago anual
            currency: "USD",
            status: "paid",
            method: "debit_6039"
          }
        ]
      },
      {
        id: "ANTL-2024",
        name: "Plan Antel",
        price: {
          amount: 520,
          currency: "UYU",
          uyuEquivalent: 520
        },
        billingCycle: "monthly",
        paymentMethod: "debit_6039",
        billingDay: 10,
        contract: {
          startDate: "2023-06-10",
          renewalDate: "2025-06-10",
          cancellationDate: null,
          duration: "24 months",
          progress: 33,
          details: "Contrato a 2 años"
        },
        paymentHistory: [
          {
            date: "2024-02-10",
            amount: 520,
            currency: "UYU",
            status: "pending",
            method: "debit_6039"
          },
          {
            date: "2024-01-10",
            amount: 520,
            currency: "UYU",
            status: "paid",
            method: "debit_6039"
          },
          {
            date: "2023-12-10",
            amount: 520,
            currency: "UYU",
            status: "paid",
            method: "debit_6039"
          }
        ]
      }
    ]
  },
  {
    category: "Otros",
    items: [
      {
        id: "PELU-2024",
        name: "Peluquería",
        price: {
          amount: 820,
          currency: "UYU",
          uyuEquivalent: 820
        },
        billingCycle: "monthly",
        paymentMethod: "cash",
        billingDay: null, // no tiene día fijo
        contract: null, // no tiene contrato
        paymentHistory: [
          {
            date: "2024-02-05",
            amount: 820,
            currency: "UYU",
            status: "paid",
            method: "cash"
          },
          {
            date: "2024-01-08",
            amount: 820,
            currency: "UYU",
            status: "paid",
            method: "cash"
          }
        ]
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

        const calculateServices = {
  // Total mensual
  getMonthlyTotal: () => {
    let total = 0;
    services.forEach(category => {
      category.items.forEach(service => {
        if (service.billingCycle === 'monthly') {
          total += service.price.uyuEquivalent;
        } else if (service.billingCycle === 'annual') {
          total += service.price.uyuEquivalent / 12; // promedio mensual
        }
      });
    });
    return total;
  },

  // Próximos vencimientos
  getUpcomingPayments: () => {
    const today = new Date();
    const upcoming = [];
    services.forEach(category => {
      category.items.forEach(service => {
        if (service.billingDay) {
          // Calcula próxima fecha de pago
          const nextPayment = new Date(today.getFullYear(), today.getMonth(), service.billingDay);
          if (nextPayment < today) {
            nextPayment.setMonth(nextPayment.getMonth() + 1);
          }
          upcoming.push({
            service: service.name,
            date: nextPayment,
            amount: service.price.uyuEquivalent
          });
        }
      });
    });
    return upcoming.sort((a, b) => a.date - b.date);
  },

  // Estado de los contratos
  getContractStatus: () => {
    return services.map(category => 
      category.items
        .filter(service => service.contract)
        .map(service => ({
          name: service.name,
          progress: service.contract.progress,
          daysUntilRenewal: Math.floor((new Date(service.contract.renewalDate) - new Date()) / (1000 * 60 * 60 * 24))
        }))
    ).flat();
  }
};
const serviceAlerts = services.map(category => 
  category.items
    .filter(service => {
      const today = new Date();
      const renewalDate = new Date(service.contract?.renewalDate);
      return renewalDate && (renewalDate - today) / (1000 * 60 * 60 * 24) <= 30;
    })
    .map(service => ({
      type: 'renewal',
      message: `${service.name} se renovará el ${new Date(service.contract.renewalDate).toLocaleDateString()}`,
      severity: 'warning'
    }))
).flat();
        
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
  const monthlyTotal = calculateServices.getMonthlyTotal();
  const upcomingPayments = calculateServices.getUpcomingPayments();
  const contractStatus = calculateServices.getContractStatus();

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

      {/* Mostrar alertas de renovación de servicios */}
      {serviceAlerts.map((alert, index) => (
        <Alert key={index} severity={alert.severity} sx={{ mb: 2 }}>
          {alert.message}
        </Alert>
      ))}

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
                        secondary={
                          <>
                            {formatCurrency(service.price.amount, service.price.currency)}
                            {service.price.currency === "USD" && 
                              ` (${formatCurrency(service.price.uyuEquivalent)})`}
                            <br />
                            {service.billingCycle === 'annual' && '(Pago Anual)'}
                            <LinearProgress 
                              variant="determinate" 
                              value={service.contract?.progress || 0}
                              sx={{ mt: 1 }}
                            />
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6">
                    Total Servicios Mensuales: {formatCurrency(monthlyTotal)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Próximos Vencimientos</Typography>
                <List>
                  {upcomingPayments.map((payment, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Calendar />
                      </ListItemIcon>
                      <ListItemText 
                        primary={`${payment.service}`}
                        secondary={`${payment.date.toLocaleDateString()} - ${formatCurrency(payment.amount)}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6">Estado de Contratos</Typography>
                {contractStatus.map((contract, index) => (
                  <Box key={index} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">{contract.name}</Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={contract.progress}
                      sx={{ mb: 1 }} 
                    />
                    <Typography variant="caption" color="textSecondary">
                      {contract.daysUntilRenewal} días para renovación
                    </Typography>
                  </Box>
                ))}
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
