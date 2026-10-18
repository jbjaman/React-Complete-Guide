const numbers = [1, 2, 3];

// প্রতিটির জন্য আলাদা JSX লিখতে পারো, কিন্তু list বড় হলে সেটি ব্যবহারিক নয়। React-এ সাধারণত JavaScript-এর map() ব্যবহার করে array-এর প্রতিটি item থেকে UI তৈরি করা হয়।

const doubled = numbers.map((number) => number * 2);

// map() array-এর প্রতিটি item-এর জন্য callback function চালায় এবং ফলাফল নিয়ে একটি নতুন array তৈরি করে।
console.log(doubled);

function ListArray() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <>
      <div className="p-5 bg-black text-slate-100 text-xl border border-slate-500 m-2 rounded-md">
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
          {/* fruits.map(...) প্রতিটি ফলের জন্য একটি <li> তৈরি করে। */}
          {/* {} দিয়ে JSX-এর মধ্যে JavaScript expression চালানো হয়েছে। */}
          {/* key={fruit} প্রতিটি list item-কে একটি পরিচয় দেয়। নিচে key আরও বিস্তারিত বুঝব। */}
        </ul>
      </div>
    </>
  );
}

export default ListArray;
