import { categories } from '../global/data/categories.data';
import { CategoryInterface } from '../interfaces/category.interface';
import { TransactionCardsList } from '../screens/Dashboard';

export function transactionMapper(data: any): TransactionCardsList {
  return {
    id: data.id,
    transactionType: data.transactionType,
    title: data.name,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(data.amount),
    category: categoryLabelMapper(data.category),
    transactionDate: new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date(data.createdAt)),
  };
}

function categoryLabelMapper(key: string): CategoryInterface {
  const [category] = categories.filter((category) => category.key === key);
  return category;
}
