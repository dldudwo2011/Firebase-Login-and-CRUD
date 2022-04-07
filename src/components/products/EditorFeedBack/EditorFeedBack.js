import React from "react";
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";
import {
  EditorFeedBackStyles,
  FeedBackMessage,
  FeedBack,
  FeedBackOption,
} from "./styles";
import { Button } from "./../../ui/buttons";
import { useNavigate } from "react-router-dom";

function EditorFeedBack({ children, status, writeCompleted, ...props }) {
  const navigator = useNavigate();

  function onClickHandlerViewAll() {
    navigator("dashboard");
  }

  return (
    <EditorFeedBackStyles {...props}>
      {!status ? (
        <FeedBack>
          <AiOutlineCheckCircle color="d9f99d" size="12rem" />
          <FeedBackMessage>Product Uploaded Successfully</FeedBackMessage>
        </FeedBack>
      ) : (
        <FeedBack>
          <AiOutlineCloudUpload color="d9f99d" size="12rem" />
          <FeedBackMessage>Uploading New Product</FeedBackMessage>
        </FeedBack>
      )}

      <FeedBackOption>
        <Button
          bc="tomato"
          color="white"
          onClick={() => writeCompleted(false)}
          disabled={status}
        >
          Add Another Product
        </Button>
        <Button
          bc="cornflowerblue"
          color="white"
          onClick={onClickHandlerViewAll}
        >
          View All Products
        </Button>
      </FeedBackOption>
    </EditorFeedBackStyles>
  );
}

export default EditorFeedBack;
