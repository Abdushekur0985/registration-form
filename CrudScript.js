
function deleteAll() {
    fetch('http://localhost:3000/mytable', {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
      alert(result.message + ' Rows deleted: ' + result.affectedRows);
    })
    .catch(err => {
      console.error('Error:', err);
      alert('Failed to delete data');
    });
  }