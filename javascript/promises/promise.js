function getUser(callback) {
  setTimeout(() => {
    callback("Rahim");
  }, 1000);
}

getUser(function (name) {
  console.log(name);
});

// এখানে getUser() একটি callback গ্রহণ করছে। কাজটি ছোট হওয়ায় code সহজ।
// কিন্তু যখন অনেকগুলো asynchronous opeয়, তখন nested callback জটিল হতে পারে। Promise এই ধরনের কাজ organize করতে ration একটির পর একটি করতে হসাহায্য করে।

// একই কাজ Promise দিয়ে :

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rahim");
    }, 1000);
  });
}

getUser().then(() => {
  console.log(name);
});

// এখানে getUser() একটি Promise return করে। Promise fulfilled হলে .then()-এর callback result "Rahim" পায়।

/**
 * Question: Promise কী?
 * Answer: Promise হলো একটি JavaScript object, যা কোনো asynchronous operation-এর eventual success বা failure-এর result-কে represent করে।
 *
 * একটি Promise-এর তিনটি state রয়েছে।
 *
 * 1. Pending: Promise-এর operation এখনও settle করেনি। এটি success বা failure—কোনোটিতেই পৌঁছায়নি।
 *
 * 2. Fulfilled: Operation সফল হয়েছে। একটি fulfillment value থাকতে পারে।
 *
 * 3. Rejected: Operation ব্যর্থ হয়েছে। একটি rejection reason থাকে।
 *
 *
 * Fulfilled এবং rejected—দুটিই settled state। Promise একবার fulfilled বা rejected হলে সেটি আর অন্য state-এ যায় না।
 */
