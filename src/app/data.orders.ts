export const orders = [
  {
    OrderID: 1,
    OrderNumber: 'Q100094562',
    AccountNumber: '7234570',
    AccessionNumber: 'Q100094562',
    Final: false,
    Status: {
      StatusID: 1,
      StatusName: 'Not Sent to Lab',
    },
    Patient: {
      name: 'Skiba, Test1',
      id: 1,
      dob: 'May 13, 2005',
    },
    OrderedDate: 'Jun 22, 2021 14:50',
    Tests: [
      {
        cancelled: false,
        revised: false,
        status: 'In Progress',
        publishedName: 'Epilepsys/Seizure Genetic Panals by Next-Generation Sequencing (NGS), Varies',
        mayoTestID: 'ESPAN',
      },
    ],
  },
  {
    OrderID: 2,
    OrderNumber: 'Q100094560',
    AccountNumber: '',
    final: false,
    Status: {
      StatusID: 2,
      StatusName: 'Order Transmitted',
    },
    Patient: {
      name: 'Testa, Chuck',
      id: 44,
      dob: 'June 11, 1970',
    },
    OrderedDate: 'Jun 22, 2021 11:25',
    Tests: [
      {
        cancelled: false,
        revised: false,
        status: 'In Progress',
        publishedName: 'Epilepsys/Seizure Genetic Panals by Next-Generation Sequencing (NGS), Varies',
        mayoTestID: 'ESPAN',
      },
    ],
  },
];
