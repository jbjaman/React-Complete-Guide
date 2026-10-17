// .finally() ব্যবহার করা হয় Promise সফল বা ব্যর্থ—যেকোনো অবস্থায় শেষের cleanup কাজ করার জন্য।

Promise.resolve("Data loaded")
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Requested finished");
  });

/**
 * Output:
 * Data loaded
 * Request finished
 */

Promise.reject("Request failed")
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Request finished");
  });

/**
 * Output:
 * Request failed
 * Request finished
 */

// .finally() সাধারণত মূল fulfillment value বা rejection reason পরিবর্তন করে না। তবে .finally()-এর ভেতরে যদি error throw করা হয় বা rejected Promise return করা হয়, তাহলে পরের Promise chain rejected হতে পারে।

/**
 * .finally()-এর সাধারণ ব্যবহার:
 *
 * - Loading indicator বন্ধ করা।
 * - Cleanup করা।
 * - কোনো operation শেষ হয়েছে—এটি বোঝানো।
 */
