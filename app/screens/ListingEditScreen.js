import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import listingsApi from "../api/listings";
import AppForm from "../components/forms/AppFormm";
import AppFormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  quality: Yup.string().required().min(1).max(10).label("Quality"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "window-maximize",
    label: "Windows",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "fuel",
    label: "Fuel",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "car",
    label: "Body",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "car-light-high",
    label: "lights",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "lightning-bolt",
    label: "Electronics",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "tire",
    label: "Tires",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "application",
    label: "Other",
    value: 7,
  },
];

function ListingEditScreen() {
  //   const location = useLocation();
  //   const [uploadVisible, setUploadVisible] = useState(false);
  //   const [progress, setProgress] = useState(0);

  //   const handleSubmit = async (listing, { resetForm }) => {
  //     setProgress(0);
  //     setUploadVisible(true);
  //     const result = await listingsApi.addListing(
  //       { ...listing, location },
  //       (progress) => setProgress(progress)
  //     );

  //     if (!result.ok) {
  //       setUploadVisible(false);
  //       return alert("Could not save the listing");
  //     }

  //     resetForm();
  //   };

  return (
    <Screen style={styles.container}>
      {/* <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      /> */}
      <AppForm
        initialValues={{
          title: "",
          quality: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <FormImagePicker name={"images"} />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={6}
          name="quality"
          placeholder="Quality 1-10"
          width={160}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListingEditScreen;
