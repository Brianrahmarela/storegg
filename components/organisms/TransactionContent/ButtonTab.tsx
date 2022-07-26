import classNames from "classnames"

interface ButtonTabProps {
  title: string,
  active: boolean
}
function ButtonTab(props: ButtonTabProps) {
  const { title, active } = props
  const btnClass = classNames({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active

  })
  return (
    <a data-filter="*" href="#" className={btnClass}>{title}</a>
  )
}

export default ButtonTab