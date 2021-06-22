export interface dropdownItem {
  text: string;
  value: number;
}

export const statuses: Array<{ text: string; value: number }> = [
  { text: 'Not Sent to Lab', value: 1 },
  { text: 'Order Transmitted', value: 2 },
  { text: 'Specimen Receipted', value: 3 },
  { text: 'Received by lab', value: 4 },
  { text: 'Partially Complete', value: 5 },
  { text: 'Incomplete', value: 6 },
  { text: 'Final', value: 7 },
];
