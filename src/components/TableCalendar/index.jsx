import {Table} from "antd";
import "./styles.css";

const TableCalendar = ({currentMonday}) => {
  function formatDate(dateObj) {
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const handlePlusDays = (days) => {
    let newDate = new Date(currentMonday);
    newDate.setDate(newDate.getDate() + days);
    return formatDate(newDate);
  };

  const dataSource = [
    {
      mon: 7,
      tue: 7,
      wed: 7,
      thu: null,
      fri: 7,
      sat: 7,
      sun: 7,
    },
    {
      mon: 7,
      tue: 7,
      wed: 7,
      thu: null,
      fri: 7,
      sat: 7,
      sun: 7,
    },
    {
      mon: 7,
      tue: 7,
      wed: 7,
      thu: null,
      fri: 7,
      sat: 7,
      sun: 7,
    },
    {
      mon: 7,
      tue: 7,
      wed: 7,
      thu: null,
      fri: 7,
      sat: 7,
      sun: 7,
    },
    {
      mon: 7,
      tue: 7,
      wed: 7,
      thu: null,
      fri: 7,
      sat: 7,
      sun: 7,
    },
    {
      mon: null,
      tue: 7,
      wed: 7,
      thu: null,
      fri: 7,
      sat: 7,
      sun: 7,
    },
    {
      mon: 7,
      tue: 7,
      wed: 7,
      thu: null,
      fri: 7,
      sat: 7,
      sun: 7,
    },
  ];

  const columns = [
    {
      title: (
        <div>
          <div>Monday</div>
          <div>{formatDate(currentMonday)}</div>
        </div>
      ),
      dataIndex: "mon",
      key: "11102023",
      render: (_, record) => <div>{record.mon}</div>,
    },
    {
      title: (
        <div>
          <div>Tuesday</div>
          <div>{handlePlusDays(1)}</div>
        </div>
      ),
      dataIndex: "tue",
      key: "12102023",
    },
    {
      title: (
        <div>
          <div>Wednesday</div>
          <div>{handlePlusDays(2)}</div>
        </div>
      ),
      dataIndex: "wed",
      key: "13102023",
    },
    {
      title: (
        <div>
          <div>Thursday</div>
          <div>{handlePlusDays(3)}</div>
        </div>
      ),
      dataIndex: "thu",
      key: "14102023",
    },
    {
      title: (
        <div>
          <div>Friday</div>
          <div>{handlePlusDays(4)}</div>
        </div>
      ),
      dataIndex: "fri",
      key: "15102023",
    },
    {
      title: (
        <div>
          <div>Saturday</div>
          <div>{handlePlusDays(5)}</div>
        </div>
      ),
      dataIndex: "sat",
      key: "16102023",
    },
    {
      title: (
        <div>
          <div>Sunday</div>
          <div>{handlePlusDays(6)}</div>
        </div>
      ),
      dataIndex: "sun",
      key: "17102023",
    },
  ];

  return (
    <>
      <div className="table-container">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
};

export default TableCalendar;
