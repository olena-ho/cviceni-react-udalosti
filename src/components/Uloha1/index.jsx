/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/

export const Uloha1 = () => {
  const showAlert = () => {
    alert('Ahoj')
  }
  return <button onClick={showAlert}>Ukaž bublinu</button>;
};
