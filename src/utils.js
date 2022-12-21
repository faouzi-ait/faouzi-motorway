import axios from 'axios';

export const getApiData = async (url, timer, setImages) => {
  console.time(timer);
  const request = await axios.get(url);
  if (request.data) {
    setImages(request.data);
  }
  console.timeEnd(timer);
};

export const checkDescriptionLength = (str) => {
  if (!str) return 'No description available';
  if (str && str.length > 120) {
    return `${str?.substring(0, 130)}...`;
  } else {
    return str;
  }
};

const MONTHS = [
  'Jun.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
];

const getPublicationDate = (dateStr) => {
  const date = new Date(dateStr);
  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${time} . ${day} ${MONTHS[month]} ${year}  `;
};

export { getPublicationDate };

export const setErrorStyle = (name) => {
  return {
    borderColor: name ? 'red' : '',
    boxShadow: name ? '0 0 1.5px 1px red' : '',
  };
};

export const defaultValues = {
  fullName: '',
  email: '',
  color: '#CCCCCC',
  dob: '',
  salary: 4000,
};
