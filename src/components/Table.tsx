export function Table({ children }: { children: React.ReactNode }) {
  return <table className="table-auto">{children}</table>;
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className="border-b-4 border-stone-300 dark:border-stone-700">
      <tr className="h-10">{children}</tr>
    </thead>
  );
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

interface TableRowProps {
  children: React.ReactNode;
  bottomBorder?: boolean;
  altBackground?: boolean;
}

export function TableRow({
  children,
  bottomBorder = false,
  altBackground = false,
}: TableRowProps) {
  const borderClass = bottomBorder
    ? "border-b-4 border-stone-300 dark:border-stone-700"
    : "border-b-2 border-stone-200 dark:border-stone-800";
  const bgColorClass = altBackground
    ? "bg-stone-100 dark:bg-stone-800"
    : "bg-stone-50 dark:bg-stone-900";
  return <tr className={`h-10 ${borderClass} ${bgColorClass}`}>{children}</tr>;
}

interface TableHeaderCellProps {
  children?: React.ReactNode;
  className?: string;
}

export function TableHeaderCell({
  children,
  className = "",
}: TableHeaderCellProps) {
  const baseClassName = "text-start font-semibold";
  const finalClassName = `${baseClassName} ${className}`;

  return (
    <th scope="col" className={finalClassName}>
      {children}
    </th>
  );
}

interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
  isInitialColumn?: boolean;
}

export function TableCell({
  children,
  className = "",
  isInitialColumn = false,
}: TableCellProps) {
  const baseClassName = "whitespace-nowrap min-h-[40px]";
  const fontWeightClass = isInitialColumn ? "font-semibold pl-4" : "";
  const finalClassName = `${baseClassName} ${fontWeightClass} ${className}`;

  return <td className={finalClassName}>{children}</td>;
}
