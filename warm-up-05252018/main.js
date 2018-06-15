var students = [
  'JJ',
  'Franz',
  'Taylor',
  'Daryl',
  'Jeff',
  'Jerome',
  'Arthur'
]

function forEach(list, procedure) {
  for (var i = 0; i < list.length; i++) {
    procedure(list[i])
  }
}
