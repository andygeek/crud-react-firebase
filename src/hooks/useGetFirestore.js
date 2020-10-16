import { useState, useEffect } from "react";
import { firebase } from "../firebase";

export const useGetFirestore = (collection) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const db = firebase.firestore();
        const data = await db.collection(collection).get();
        const arrayData = await data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResponse(arrayData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    doFetch();
  }, [collection]);
  return {
    response,
    error,
    loading,
  };
};
