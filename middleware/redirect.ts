export default function (context: any) {
  if (
    context.route.path === '/' &&
    (context.route.path !== '/list' || context.route.path !== '/converter')
  ) {
    return context.redirect('/list');
  }
}
