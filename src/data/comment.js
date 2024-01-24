export const getCommentsData = async () => {
    return [
      {
        _id: "10",
        user: {
          _id: "a",
          name: "Eric Okyere",
        },
        desc: "it was a nice post, Thank you!",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2022-12-31T17:22:05.092+0000",
      },
      {
        _id: "11",
        user: {
          _id: "b",
          name: "Kwesi Attah",
        },
        desc: "a reply for Mohammad",
        post: "1",
        parent: "10",
        replyOnUser: "Thanks for your comment",
        createdAt: "2022-12-31T17:22:05.092+0000",
      },
      {
        _id: "12",
        user: {
          _id: "b",
          name: "Kwabena Ebo",
        },
        desc: "keep it up bro <3",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2022-12-31T17:22:05.092+0000",
      },
      {
        _id: "13",
        user: {
          _id: "c",
          name: "Jessica Mensha",
        },
        desc: "I'm always interested in your content :)",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2022-12-31T17:22:05.092+0000",
      },
    ];
  };
  