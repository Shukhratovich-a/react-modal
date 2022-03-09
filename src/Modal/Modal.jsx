import React from "react";

import "./Modal.scss";

const Modal = React.forwardRef(({ text = "Lorem ipsum dolor", closeModal, modalStyle }, ref) => {
  return (
    <div
      className={`modal ${modalStyle === "open" ? "modal--open" : ""}`}
      aria-label="modal"
      ref={ref}
      onClick={closeModal}
    >
      <div className="modal__inner">
        <h2 className="modal__heading">{text}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat optio libero labore
          atque error maxime quaerat ut fuga quisquam quibusdam sapiente rerum, recusandae, autem,
          odio veritatis quia enim provident? Eos vel qui porro quasi, ea nulla iste quo quis magni
          in corrupti culpa quibusdam sequi alias accusamus? Debitis eum facere iure, cum
          perspiciatis blanditiis quidem quam vel minima ipsum quibusdam maxime necessitatibus sequi
          commodi aut! Reiciendis illo modi nulla quisquam? Dolorem consequatur suscipit voluptate
          pariatur officia illum quae? Quos, officia debitis alias, architecto explicabo perferendis
          et dignissimos minus cum fugiat atque necessitatibus aspernatur impedit dicta eaque,
          laborum nemo doloribus tempore!
        </p>
        <button className="modal__close" name="modal-close" onClick={closeModal}>
          &times;
        </button>
      </div>
    </div>
  );
});

export default Modal;
