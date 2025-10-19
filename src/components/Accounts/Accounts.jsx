import Account from "../Account/Account";
import Button from "../Button/Button";
import { IconWallet } from "../Icons";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import { accounts } from "./data/accounts";

export default function Accounts() {
  return (
    <div className="flex flex-col h-full">
      <List>
        {accounts.map((account) => (
          <ListItem key={account.bank}>
            <Account account={account}/>
          </ListItem>
        ))}
      </List>
      <div className="flex-grow"/>
      <div className="flex justify-center">
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </div>
  )
}
