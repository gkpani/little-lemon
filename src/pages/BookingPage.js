import BookingForm from "../components/BookingForm";

function BookingPage() {
  return (
    <main>
      <h1>Reserve a Table</h1>

      <p>
        Please complete the form below to reserve
        your table at Little Lemon.
      </p>

      <BookingForm />

      <p>
        We look forward to serving you.
      </p>
    </main>
  );
}

export default BookingPage;