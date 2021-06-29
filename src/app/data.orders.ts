export const orders = [
  {
    orderID: 1,
    clientOrderNumber: 'Q100094562',
    accountNumber: '7234570',
    accessionNumber: 'Q100094562',
    softOrderNumber: 'Q100094562',
    final: false,
    status: {
      id: 1,
      name: 'Not Sent to Lab',
    },
    patient: {
      name: 'Skiba, Test1',
      id: 1,
      dob: 'May 13, 2005',
    },
    orderedDate: 'Jun 22, 2021 14:50',
    collectedOn: 'Jun 22, 2021 14:00',

    tests: [
      {
        cancelled: false,
        revised: false,
        status: 'In Progress',
        info: {
          publishedName: 'Epilepsys/Seizure Genetic Panals by Next-Generation Sequencing (NGS), Varies',
          mayoTestID: 'ESPAN',
        },
        receiptOn: 'Jun 24, 2021 08:43',
        receivedOn: 'Jun 24, 2021 09:10',
        canceledOn: '',
      },
    ],
  },
  {
    orderID: 2,
    clientOrderNumber: 'Q100094560',
    accountNumber: '7234577',
    accessionNumber: 'Q100094560',
    softOrderNumber: 'Q100094560',
    final: false,
    status: {
      id: 2,
      name: 'Order Transmitted',
    },
    patient: {
      name: 'Testa, Chuck',
      id: 44,
      dob: 'June 11, 1970',
    },
    orderedDate: 'Jun 22, 2021 11:25',
    collectedOn: 'Jun 22, 2021 11:00',
    tests: [
      {
        cancelled: false,
        revised: false,
        status: 'In Progress',
        info: {
          publishedName: 'Epilepsys/Seizure Genetic Panals by Next-Generation Sequencing (NGS), Varies',
          mayoTestID: 'ESPAN',
        },
        receiptOn: 'Jun 24, 2021 07:33',
        receivedOn: 'Jun 24, 2021 08:50',
        canceledOn: '',
      },
    ],
  },
];
