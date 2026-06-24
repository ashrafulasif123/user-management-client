# যখন Client side থেকে data POST Method এ পাঠানো হয়

-> fetch("http://localhost:3000/users", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(newUsers), // এখানে JSON.stringify করে পাঠাচ্ছি তাই ‍Server side parse করার জন্য মানে JSON Object এ বানানো জন্য ব্যবহার করতে হবে ‍app.use(express.json())
})
.then((res) => res.json())
.then((data) => console.log(data));
