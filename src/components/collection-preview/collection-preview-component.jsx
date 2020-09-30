import React from "react";

import CollectionItem from "../common/collection-item/collection-item.component";

import "./collection-preview-component.styles.scss";

// Display products for each category in a row of four images

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4) // filter 4 images and display
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
