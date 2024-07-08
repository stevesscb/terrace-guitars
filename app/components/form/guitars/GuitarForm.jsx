import { useRouter } from "next/navigation";

import Input from "@/app/components/form/inputs/Input";
import TextArea from "@/app/components/form/inputs/TextArea";
import SwitchButton from "@/app/components/buttons/SwitchButton";
import Button from "@/app/components/buttons/Button";

import classes from "./guitarForm.module.scss";
import Modal from "../../modal/Modal";

export default function GuitarForm({
  errorMessages,
  dispatch,
  title,
  guitar,
  formType,
}) {
  const router = useRouter();

  return (
    <>
      <form
        id="guitar-form"
        action={dispatch}
        className={classes["guitar-form"]}
      >
        <h2 className={classes.title}>{title}</h2>
        <div className={classes["type-select"]}>
          <Input
            type="radio"
            id="electric"
            label="Electric"
            name="type"
            value="ELECTRIC"
            error={errorMessages}
            defaultChecked={true}
          />
          <Input
            type="radio"
            id="acoustic"
            label="Acoustic"
            name="type"
            value="ACOUSTIC"
            error={errorMessages}
            defaultChecked={false}
          />
        </div>
        <Input
          type="text"
          id="make"
          label="Make"
          name="make"
          placeholder="Fender"
          error={errorMessages}
          defaultValue={guitar && guitar.make}
        />
        <Input
          type="text"
          id="model"
          label="Model"
          name="model"
          placeholder="Stratocaster"
          error={errorMessages}
          defaultValue={guitar && guitar.model}
        />
        <Input
          type="text"
          id="year"
          label="Year"
          name="year"
          maxLength="4"
          placeholder="1990"
          error={errorMessages}
          defaultValue={guitar && guitar.year}
        />
        <Input
          type="text"
          id="price"
          label="Price (USD)"
          name="price"
          maxLength="6"
          placeholder="$1200"
          error={errorMessages}
          defaultValue={guitar && guitar.price}
        />
        <TextArea
          id="description"
          label="Description"
          name="description"
          placeholder="Detailed description on the guitar..."
          error={errorMessages}
          defaultValue={guitar && guitar.description}
        />
        <SwitchButton formType={formType} guitar={guitar} />
        {/* <div className={classes.errorContainer}>
          {errorMessages &&
            errorMessages.map((error, index) => (
              <p className={classes.errorMessage} key={index}>
                {error}
              </p>
            ))}
        </div> */}
        <div className={classes.cta}>
          {formType === "update" ? (
            <Modal
              id="guitar-form"
              label="submit"
              title="Do you want to publish these changes?"
              description={false}
            />
          ) : (
            <Button bg="success" label="create" />
          )}
          <Button bg="neutral" label="return" onClick={() => router.back()} />
        </div>
      </form>
    </>
  );
}
