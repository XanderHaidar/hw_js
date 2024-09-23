`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  const sites = [
    {
      companyName: `Arasaka Corporation`,
      owner: `Saburo Arasaka`,
      sponsors: [
        { lastName: `Arasaka`, firstName: `Yorinobu`, investment: 30000 },
        { lastName: `Arasaka`, firstName: `Hanako`, investment: 20000 }
      ],
      releaseYear: 2005,
      cost: 15000
    },

    {
      companyName: `Militech`,
      owner: `Donald Lundee`,
      sponsors: [
        { lastName: `Stout`, firstName: `Meredith`, investment: 10000 },
        { lastName: `Depp`, firstName: `Johny`, investment: 5000 }
      ],
      releaseYear: 2010,
      cost: 8000
    },

    {
      companyName: `Kang Tao`,
      owner: `Kang Tao`,
      sponsors: [
        { lastName: `Tao`, firstName: `Kang`, investment: 70000 },
      ],
      releaseYear: 2008,
      cost: 14000
    }
  ]
  // =========
  let totalCost = sites.reduce((sum, site) => sum + site.cost, 0)
  console.log(`Total cost of all sites: ${totalCost}`)
  // =========
  let sitesBetween00And09 = sites.reduce((count, site) => {
    return site.releaseYear >= 2000 && site.releaseYear <= 2009 ? count + 1 : count
  }, 0)
  console.log(`Number of sites made between 2000 and 2009: ${sitesBetween00And09}`);
  // =========
  let sitesWithMoreThan100000Invest = sites.reduce((count, site) => {
    let totalInvest = site.sponsors.reduce((sum, sponsors) => sum + sponsors.investment, 0)
    return totalInvest > 100000 ? count + 1 : count
  }, 0)
  console.log(`Number of sites with investments over 100000: ${sitesWithMoreThan100000Invest}`)
  // =======
  let allSponsors = sites.reduce((list, site) => {
    return list.concat(site.sponsors)
  }, [])
  console.log("List of all sponsors:", allSponsors)
  // ======
  let maxProfitYear = sites.reduce((maxYear, site) => {
    return site.cost > maxYear.maxCost ? {
      year: site.releaseYear, maxCost: site.cost
    } : maxYear
  }, { year: 0, maxCost: 0 }).year
  console.log(`Year with the highest profit: ${maxProfitYear}`)
  // =======
  let sortedByCost = [...sites].sort((a, b) => b.cost - a.cost)
  console.log(`Sites sorted by descending profit: `, sortedByCost)
  // =======
  let below10000 = sites.filter(site => site.cost <= 10000)
  let above10000 = sites.filter(site => site.cost > 10000)
  console.log(`Sites with cost <= 10000:`, below10000)
  console.log(`Sites with cost > 10000:`, above10000)

  console.log(`..........................................................`)











  //=======================================================================================================================================================
}