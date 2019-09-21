import { useApolloClient } from "@apollo/react-hooks";
import { IMeQuery, MeDocument, IUser } from "../graphql/generated/graphql";


export default function useMe() : Pick<IUser, "username" | "email"> | null {
  const client = useApolloClient()
  const data: IMeQuery | null = client.readQuery({query: MeDocument})
  return data && data.me
}