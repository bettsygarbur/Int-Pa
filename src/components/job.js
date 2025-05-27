import React from "react";
import { FormattedDate, FormattedMessage } from 'react-intl';

const formatSalary = (salary, locale) => {

  const formattedNumber = new Intl.NumberFormat(locale).format(salary);

  if (locale.startsWith('es')) {

    if (salary === 1) return `${formattedNumber} millón`;
    else return `${formattedNumber} millones`;
  } else {

    return `${formattedNumber} million`;
  }
};

const Job = (props) => {
  const { offer, locale } = props;


  const formattedVisits = new Intl.NumberFormat(locale).format(offer.visits);

  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>{formatSalary(offer.salary, locale)}</td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'

        />
      </td>
      <td>{formattedVisits}</td>
    </tr>
  );
};

export default Job;
