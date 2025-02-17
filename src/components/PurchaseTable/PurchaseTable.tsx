import { Table } from "@components/Table/Table";
import { TableBody } from "@components/Table/TableBody";
import { TableCell } from "@components/Table/TableCell";
import { TableHead } from "@components/Table/TableHead";
import { TableRow } from "@components/Table/TableRow";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";

export const PurchaseTable = () => {
  const purchases = useSelector((statate: RootState) => statate.user.purchases);
  return (
    <div className="w-full rounded-lg bg-white p-6 ring shadow-sm ring-[#E4E4E7]">
      <h2 className="mb-4 text-lg font-semibold">Historial de Compras</h2>
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell type="head">Fecha</TableCell>
              <TableCell type="head">Tienda</TableCell>
              <TableCell type="head">Tracking</TableCell>
              <TableCell type="head" textPosition="text-right">
                Valor Total
              </TableCell>
              <TableCell type="head" textPosition="text-right">
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchases &&
              purchases.map((purchase, index) => (
                <TableRow key={index}>
                  <TableCell type="body">{String(purchase.date)}</TableCell>
                  <TableCell type="body">{purchase.store}</TableCell>
                  <TableCell type="body">{purchase.trackingNumber}</TableCell>
                  <TableCell type="body" textPosition="text-right">
                    ${purchase.amount.toFixed(2)}
                  </TableCell>
                  <TableCell type="action"></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
