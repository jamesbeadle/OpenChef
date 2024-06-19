import Result "mo:base/Result";
import Principal "mo:base/Principal";
import DTOs "dtos/DTOs";
import T "data-types/types";
import UserManager "managers/user-manager";

actor Self {

  private let userManager = UserManager.UserManager();
   

  //User public endpoints:
  
  public shared query ({ caller }) func getUser() : async Result.Result<DTOs.UserDTO, T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return userManager.getUser(principalId);
  };
    
  public shared ({ caller }) func createUser(dto: DTOs.CreateUserDTO) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return userManager.createUser(principalId, dto);
  };

  public shared ({ caller }) func updateUser(dto: DTOs.UpdateUserDTO) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return userManager.updateUser(principalId, dto);
  };

  //stable storage

  private stable var stable_users: [T.User] = [];
  
  system func preupgrade() {
    stable_users := userManager.getStableUsers();
  };

  system func postupgrade() {
    userManager.setStableUsers(stable_users);
  };

};
