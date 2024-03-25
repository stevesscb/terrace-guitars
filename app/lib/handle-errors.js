export default function handleErrors(error) {
  switch (error.constructor.name) {
    case 'PrismaClientKnownRequestError':
      return 'Prisma error';
    case 'NotFoundError':
      return 'Not found error';
    case 'ValidationError':
      let errorMessages = [];

      error.inner.forEach(({ path, errors: [msg] }) => {
        console.log(msg);

        if (path === 'year') {
          msg = 'Please enter a  year (numbers only) eg: 1997.';
        }

        if (path === 'price') {
          msg = 'Please enter a price (numbers only)';
        }

        errorMessages.push(msg);
      });

      return errorMessages;
    default:
      return 'Server error';
  }
}
