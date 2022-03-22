import React from "react";
import PlaceHolderImage from "assets/images/default.png";

function EditPanel(props) {
  const styleObj = {
    height: "calc(100vh - 5rem)",
    marginLeft: "17.5rem",
  };

  return (
    <div className="container-fluid p-5" style={styleObj}>
      <div>
        <h1 class="h1 font-weight-bold text-center my-3">Update Product</h1>
        <form id="shoesForm" class="col-lg-4 m-lg-auto">
          <div>
            <div class="display">
              <img
                src={PlaceHolderImage}
                class="w-100 mb-3"
                alt="placeholder"
              />
            </div>
            <div class="form-group">
              <label for="shoeImage" class="d-block text-start mb-1">
                Select image
              </label>
              <input
                type="file"
                class="form-control-file mb-2"
                id="shoeImage"
                accept=".jpg, .png, .jpeg, .webp .jfif"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="title" class="d-block text-start mb-1">
              Title
            </label>
            <input
              type="text"
              class="form-control w-100 mb-2"
              id="title"
              aria-describedby="emailHelp"
              placeholder="Enter title"
            />
          </div>
          <div class="form-group">
            <label for="type" class="d-block text-start mb-1">
              Type
            </label>
            <input
              type="text"
              class="form-control w-100 mb-2"
              id="type"
              placeholder="Enter type"
            />
          </div>
          <div class="form-group">
            <label for="colour-count" class="d-block text-start mb-1">
              Number of colours
            </label>
            <input
              type="number"
              class="form-control w-25 mb-2"
              id="colour-count"
            />
          </div>
          <div class="form-group">
            <label for="price" class="d-block text-start mb-1">
              Price
            </label>
            <input type="number" class="form-control w-25 mb-2" id="price" />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="just-in"
              value="Just In"
            />
            <label class="form-check-label mb-2" for="just-in">
              Just in
            </label>
          </div>

          <div class="d-flex justify-content-center">
            <div>
              <button type="submit" class="btn btn-primary me-4">
                Update
              </button>
              <button id="cancel" class="btn btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPanel;
