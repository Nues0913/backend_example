import axios from 'axios';

const DATA = {
  username: 'testUser',
  password: 'testPassword'
};

axios.post('http://localhost:3000/api/users/register', DATA, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log('Success:', response.data);  // 打印成功回應的數據
  })
  .catch(error => {
    console.error('Error:', error);  // 打印錯誤
  });
