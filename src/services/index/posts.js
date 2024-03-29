import axios from "axios";

export const getAllPosts = async () => {
  try {
    const { data} = await axios.get(
      `http://localhost:5000/posts`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

// export const getSinglePost = async ({ slug }) => {
//   try {
//     const { data } = await axios.get(`/posts/${slug}`);
//     return data;
//   } catch (error) {
//     if (error.response && error.response.data.message)
//       throw new Error(error.response.data.message);
//     throw new Error(error.message);
//   }
// };

// export const deletePost = async ({ slug, token }) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const { data } = await axios.delete(`/posts/${slug}`, config);
//     return data;
//   } catch (error) {
//     if (error.response && error.response.data.message)
//       throw new Error(error.response.data.message);
//     throw new Error(error.message);
//   }
// };

// export const updatePost = async ({ updatedData, slug, token }) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const { data } = await axios.put(`/posts/${slug}`, updatedData, config);
//     return data;
//   } catch (error) {
//     if (error.response && error.response.data.message)
//       throw new Error(error.response.data.message);
//     throw new Error(error.message);
//   }
// };

// export const createPost = async ({ token }) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const { data } = await axios.post(`/posts`, {}, config);
//     return data;
//   } catch (error) {
//     if (error.response && error.response.data.message)
//       throw new Error(error.response.data.message);
//     throw new Error(error.message);
//   }
// };
