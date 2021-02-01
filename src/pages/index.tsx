import React from "react";
import { NavBar } from "../components/NavBar";
import { withUrqlClient } from "next-urql";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data }] = usePostsQuery();  
  return (
    <>
      <NavBar />
      <div>Hello world</div>
      {!data ? (<div>loading...</div>) : data.posts.map((p) => <div key={p.id}> {p.title}</div>)}
    </>
  )
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index)