using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(UdemyReactRedux.Startup))]
namespace UdemyReactRedux
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
