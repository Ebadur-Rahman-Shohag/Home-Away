import EmptyList from "@/components/home/EmptyList";
import CountryFlagAndName from "@/components/card/CountryFlagAndName";
import Link from "next/link";

import {formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import { fetchBookings, deleteBookingAction } from "@/utils/actions";

async function BookingsPage() {
  const bookings = await fetchBookings();
  if (bookings.length === 0) {
    return <EmptyList />;
  }
  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">total bookings : {bookings.length}</h4>
      <Table>
        <TableCaption>A list of your recent bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const { id, orderTotal, amount } = booking;
            const { id: propertyId, name, country } = booking.property;
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    href={`/properties/${propertyId}`}
                    className="underline text-muted-foreground tracking-wide"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>
                  <CountryFlagAndName country={country} />
                </TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>
                  <DeleteBooking bookingId={id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

function DeleteBooking({ bookingId }: { bookingId: string }) {
  const deleteBooking = deleteBookingAction.bind(null, { bookingId });
  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default BookingsPage;