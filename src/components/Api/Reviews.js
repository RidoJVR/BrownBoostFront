import axios from "axios";

const reviewsApi = axios.create({
    reviwsURL:'http://127.0.0.1:8000/api/comments',
});

export const getReviews = async () =>{
    const res = await reviewsApi.get('/comments')
    return res.data;
}

export const postReviews = (comment) =>
  reviewsApi.post("/", comment);

export const deleteReviews = id => reviewsApi.delete(`/${id}`);

export const putReviews = (comment) => reviewsApi.put(`/${comment.id}`,comment);
