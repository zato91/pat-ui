import React from "react";
import { action } from "@storybook/addon-actions";
import Form from './Form.js'


export default {
  title: 'Form',
  component: Form,

}


export const DefaultForm = () => <Form onSubmit={action('onSubmited') }  />
