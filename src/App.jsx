import Accounts from "./components/Accounts/Accounts";
import Aside from "./components/Aside/Aside";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import DailyBudget from "./components/DailyBudget/DailyBudget";
import Main from "./components/Main/Main";
import Savings from "./components/Savings/Savings";
import SearchInput from "./components/SearchInput/SearchInput";
import Transactions from "./components/Transactions/Transactions";
import Typography from "./components/Typography/Typography";

export default function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput placeholder="Procure seu dinheiro..." />
          <div>
            <Typography variant="h1">Olá, Matheus Rocha Sousa!</Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className="grid grid-cols-2 items-stretch gap-6">
            <Card>
              <Card.header>Orçamento diário disponível:</Card.header>
              <Card.body><DailyBudget value={42} /></Card.body>
            </Card>
            <Card>
              <Card.header>Progresso da meta financeira</Card.header>
              <Card.body><Savings /></Card.body>
            </Card>
            <Card>
              <Card.header>Movimentação financeira</Card.header>
              <Card.body><Transactions /></Card.body>
            </Card>
            <Card>
              <Card.header>Minhas contas</Card.header>
              <Card.body><Accounts /></Card.body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}
