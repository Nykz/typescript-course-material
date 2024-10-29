// sync programming

function task1() {
  console.log("task1");
}

function task2() {
  console.log("task2");
}

// task1();
// task2();

// async programming

function task12() {
  setTimeout(() => {
    console.log("task12");
  }, 1000);
}

function task22() {
  console.log("task22");
}

// task12();
// task22();

// promises

const fetchData = (value: boolean): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (value) {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 2000);
    } else {
      reject("Error found");
    }
  });
};

fetchData(true)
  .then((data) => {
    console.log("success: ", data);
    // return "get more data"; // chaining promises
    fetchData(false).then((data1) => {
        console.log(data1);
    })
    .catch(error1 => {
        console.log(error1);
    });
  })
//   .then((moreData) => { // chaining promises
//     console.log("more data: ", moreData);
//   })
  .catch((error) => {
    console.log("failure: ", error);
  });


// promise async await try catch

async function fetchDataNew(value: boolean): Promise<string> {
    return 'data fetched';
}

fetchDataNew(true)
.then(data => {
    console.log(data);

})
.catch(error => {
    console.log(error);
});

async function getData(): Promise<void> {
    try {
        const data = await fetchDataNew(true);
        const data1 = await fetchDataNew(false);
    } catch(error) {
        console.log(error);
    }
}

// Working with api using Fetch

interface Post {
    userId: string;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // json data
        const posts: Post[] = await response.json();
        // console.log(posts);
    
        return posts; 
    } catch(error: any) {
        console.log(error);
        throw new Error(error);
        // throw(error);
    }
}

fetchPosts()
.then((data) => {
    // console.log('Posts: ', data);
})
.catch((error) => {
    console.log(error);
});


// Concurrent promises with Promise.all

async function tsk1() {
    console.log("task1");
    return 'tsk1'; 
  }
  
async function tsk2() {
    console.log("task2");
    return 'tsk2';
  }

async function ftchData(): Promise<[string, string]> {
    const [data1, data2] = await Promise.all([
        tsk1(),
        tsk2()
    ]);

    return [data1, data2];
}

ftchData()
.then(data => {
    console.log('promise all exec: ', data);
})
.catch(error => {
    console.log(error);
});