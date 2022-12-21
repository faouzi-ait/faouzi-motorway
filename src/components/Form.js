import React from 'react';
import InputField from './InputFiefd';
import Slider from './InputSlider';
import { Controller, useForm } from 'react-hook-form';

import { setErrorStyle, defaultValues } from '../utils';

export default function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues,
  });

  const submitForm = (data) => console.log(data);

  return (
    <div className="form-alignment">
      <form onSubmit={handleSubmit(submitForm)} className="form-container">
        <Controller
          name="fullName"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <InputField
              {...field}
              type="text"
              name="fullName"
              label="Full Name"
              aria-invalid={!!errors.fullName}
              style={setErrorStyle(errors?.fullName)}
              errors={errors}
              errormessage={
                errors?.fullName ? 'Your full name is required' : ''
              }
              placeholder="Please enter your name"
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Your email address is required',
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: 'Please enter a valid email address',
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <InputField
              {...field}
              type="text"
              name="email"
              label="Email"
              aria-invalid={!!errors.email}
              style={setErrorStyle(errors?.email)}
              errors={errors}
              errormessage={errors?.email ? errors?.email.message : ''}
              placeholder="Please enter your email"
            />
          )}
        />

        <Controller
          name="dob"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <InputField
              {...field}
              type="date"
              name="dob"
              label="Date of Birth"
              aria-invalid={!!errors.dob}
              style={setErrorStyle(errors?.dob)}
              errors={errors}
              errormessage={errors?.dob ? 'Your date of birth is required' : ''}
            />
          )}
        />

        <Controller
          name="color"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <InputField
              {...field}
              type="color"
              name="color"
              label="Favorite Color"
              aria-invalid={!!errors.color}
              style={setErrorStyle(errors?.color)}
              errors={errors}
            />
          )}
        />

        <Controller
          name="salary"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <Slider
              {...field}
              label="Salary"
              type="range"
              name="salary"
              min={2000}
              max={8000}
              aria-describedby="salary"
            />
          )}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
