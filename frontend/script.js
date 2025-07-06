// Define the backend API URL (update if your backend runs on a different port)
// const API_URL = 'http://localhost:3001/api';
//
// // Example: Fetch running logs from the backend
// async function fetchRuns() {
//   try {
//       const response = await fetch(`${API_URL}/runs`);
//           if (!response.ok) throw new Error('Failed to fetch runs');
//               const runs = await response.json();
//                   console.log('Fetched runs:', runs);
//                       return runs;
//                         } catch (error) {
//                             console.error('Error fetching runs:', error);
//                                 return [];
//                                   }
//                                   }
//
//                                   // Example: Add a new run to the backend
//                                   async function addRun(newRun) {
//                                     try {
//                                         const response = await fetch(`${API_URL}/runs`, {
//                                               method: 'POST',
//                                                     headers: { 'Content-Type': 'application/json' },
//                                                           body: JSON.stringify(newRun),
//                                                               });
//                                                                   if (!response.ok) throw new Error('Failed to add run');
//                                                                       return await response.json();
//                                                                         } catch (error) {
//                                                                             console.error('Error adding run:', error);
//                                                                                 return null;
//                                                                                   }
//                                                                                   }
//
//                                                                                   // Call these functions where needed (e.g., on page load or button click)
//                                                                                   fetchRuns().then(runs => {
//                                                                                     // Update your UI with the fetched runs
//                                                                                       console.log('Runs to display:', runs);
//                                                                                       });// Define the backend API URL (update if your backend runs on a different port)
//                                                                                       const API_URL = 'http://localhost:3001/api';
//
//                                                                                       // Example: Fetch running logs from the backend
//                                                                                       async function fetchRuns() {
//                                                                                         try {
//                                                                                             const response = await fetch(`${API_URL}/runs`);
//                                                                                                 if (!response.ok) throw new Error('Failed to fetch runs');
//                                                                                                     const runs = await response.json();
//                                                                                                         console.log('Fetched runs:', runs);
//                                                                                                             return runs;
//                                                                                                               } catch (error) {
//                                                                                                                   console.error('Error fetching runs:', error);
//                                                                                                                       return [];
//                                                                                                                         }
//                                                                                                                         }
//
//                                                                                                                         // Example: Add a new run to the backend
//                                                                                                                         async function addRun(newRun) {
//                                                                                                                           try {
//                                                                                                                               const response = await fetch(`${API_URL}/runs`, {
//                                                                                                                                     method: 'POST',
//                                                                                                                                           headers: { 'Content-Type': 'application/json' },
//                                                                                                                                                 body: JSON.stringify(newRun),
//                                                                                                                                                     });
//                                                                                                                                                         if (!response.ok) throw new Error('Failed to add run');
//                                                                                                                                                             return await response.json();
//                                                                                                                                                               } catch (error) {
//                                                                                                                                                                   console.error('Error adding run:', error);
//                                                                                                                                                                       return null;
//                                                                                                                                                                         }
//                                                                                                                                                                         }
//
//                                                                                                                                                                         // Call these functions where needed (e.g., on page load or button click)
//                                                                                                                                                                         fetchRuns().then(runs => {
//                                                                                                                                                                           // Update your UI with the fetched runs
//                                                                                                                                                                             console.log('Runs to display:', runs);
//                                                                                                                                                                             });
