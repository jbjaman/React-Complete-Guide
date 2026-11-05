// ধরো, একটি user-এর তথ্য পাওয়ার জন্য function লিখবে। এখন server ব্যবহার না করে আমরা একটি Promise দিয়ে সেই behavior simulate করছি।

function fetchUser() {
  return new Promise((resolve, reject) => {
    // const success = true;
    const success = false;

    setTimeout(() => {
      if (success) {
        resolve({
          id: 1,
          name: "Rahim",
        });
      } else {
        reject(new Error("Could not load user"));
      }
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log(user.name);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Finished");
  });

//   Rahim
// Finished
// এখানে setTimeout() শুধু asynchronous behavior simulate করছে; এটি সত্যিকারের network request নয়।
