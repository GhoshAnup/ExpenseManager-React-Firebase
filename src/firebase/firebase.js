import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBksjkv-dN-sJBMr2gjnr0cOIxit_Bgz-Y",
    authDomain: "expensemanager-edf83.firebaseapp.com",
    databaseURL: "https://expensemanager-edf83.firebaseio.com",
    projectId: "expensemanager-edf83",
    storageBucket: "expensemanager-edf83.appspot.com",
    messagingSenderId: "561522763638"
  };


  firebase.initializeApp(config);

  const database = firebase.database();
  database.ref().remove();
  // Setup "expenses" with three items (description, note, amount, createdAt)

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
  });
  
  database.ref('expenses').push({
    description: 'Phone bill',
    note: '',
    amount: 5900,
    createdAt: 976123498763
  });
  
  database.ref('expenses').push({
    description: 'Food',
    note: '',
    amount: 1200,
    createdAt: 976123498763
  });
  
  
  // child_removed
  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];
  
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  
  //     console.log(expenses);
  //   });
  
  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  
  //   console.log(expenses);
  // });
 
  
  // database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();
  
  // database.ref('notes').push({
  //   title: 'Course Topics',
  //   body: 'React Native, Angular, Python'
  // });
  
  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // })
  
  // Setup data sub -> Andrew is a Software Developer at Amazon.
  
  // Change the data and make sure it reprints
  
  // database.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });
  
  // database.ref().set({
  //   name: 'Anup ghosh',
  //   age: 26,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Philadelphia',
  //     country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved!');
  // }).catch((e) => {
  //   console.log('This failed.', e);
  // });
  
  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });
  
  // database.ref()
  //   .remove()
  //   .then(() => {
  //     console.log('Data was removed');
  //   }).catch((e) => {
  //     console.log('Did not remove data', e);
  //   });
  
