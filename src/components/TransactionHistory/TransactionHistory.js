import PropTypes from 'prop-types';
import { TransactionHistoryTable, Th, Td } from './TransactionHistory.style.jsx';


export const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryTable>
        <thead>
            <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
            </tr>
        </thead>

        <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </tr>
        ))}
        </tbody>
        </TransactionHistoryTable>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
