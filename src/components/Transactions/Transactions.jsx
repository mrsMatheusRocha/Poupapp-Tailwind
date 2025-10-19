import Button from "../Button/Button";
import { IconCurrency } from "../Icons";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import TransactionItem from "../TransactionItem/TransactionItem";
import { items } from "./data/transactions";

export default function Transactions() {
  return (
    <>
      <List>
        {items.map((transactionItem, index) => (
          <ListItem key={index}>
            <TransactionItem item={transactionItem}/>
          </ListItem>
        ))}
      </List>
      <div className="flex justify-center">
        <Button>
          <IconCurrency/> Adicionar transação
        </Button>
      </div>
    </>
  )
}
