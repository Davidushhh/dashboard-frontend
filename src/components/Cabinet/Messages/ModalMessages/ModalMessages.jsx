import * as SC from "./ModalMessages.styled";

const ModalMessages = ({ message, onClose }) => {
  const { title, sender, date } = message;

  return (
    <SC.ModalMessagesWindow>
      <SC.MenuButton size="medium" sx={{ mr: 1 }} onClick={onClose}>
        <SC.MenuCloseIcon />
      </SC.MenuButton>

      <div>
        <h3>{sender}</h3>
        <h2>{title}</h2>
        <p>{date}</p>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          accusantium adipisci animi, quae fugiat eum, eveniet autem consectetur
          ipsa nobis labore corrupti molestiae explicabo, ad delectus veniam.
          Officia quasi non eos sit excepturi quam accusamus unde, vitae eaque
          quod, totam vel nemo itaque et omnis voluptatibus deleniti. Aliquam,
          cupiditate ut?
        </p>
      </div>
    </SC.ModalMessagesWindow>
  );
};

export default ModalMessages;
