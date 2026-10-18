// Prop Drilling কী?
// ধরো, App component-এ userName আছে। কিন্তু সেটি দরকার Profile component-এর ভেতরে থাকা Avatar component-এ।

/** 
App
userName = "Rahim"

Layout
শুধু prop-টি সামনে পাঠাচ্ছে

Profile
শুধু prop-টি সামনে পাঠাচ্ছে

Avatar
userName ব্যবহার করছে

*/

// যখন data অনেক intermediate component-এর মধ্য দিয়ে পাঠাতে হয়, অথচ সেসব component নিজেরা data ব্যবহার করে না, তখন সেই pattern-কে Prop Drilling বলে।

export function Avatar({ userName }) {
  return <p>Logged in as: {userName}</p>;
}

export function Profile({ userName }) {
  return <Avatar userName={userName} />;
}

export function Layout({ userName }) {
  return <Profile userName={userName} />;
}

export function App() {
  const userName = "Rahim";

  return <Layout userName={userName} />;
}

// এখানে Layout ও Profile শুধু userName সামনে পাঠাচ্ছে।

// Prop drilling নিজে ভুল নয়। ছোট application-এ এটি একেবারেই স্বাভাবিক। তবে data অনেক স্তর অতিক্রম করলে code পরিচালনা করা কঠিন হতে পারে। React Context-এর মতো ব্যবস্থা কিছু ক্ষেত্রে এ সমস্যা কমাতে পারে;
