import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

import './AddForm.scss';

function AddForm() {
	return (
		<Form action='' className='add-form'>
			<h3>ADD PRODUCT</h3>

			<FormGroup>
				<Label>Name</Label>
				<Input type='text' />
			</FormGroup>

			<FormGroup>
				<Label>Description</Label>
				<Input type='text' />
			</FormGroup>

			<Button>Add Product</Button>
		</Form>
	);
}

export default AddForm;
